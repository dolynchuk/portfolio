#!/bin/bash

# Directory where the files are located
DIR="./"

# Navigate to the directory
cd "$DIR" || exit

# Create a temporary file to hold the file names and their creation dates
temp_file=$(mktemp)

# List files with their creation dates and store in temp_file
for file in *; do
    if [ -f "$file" ]; then
        # Get the creation date and format it
        creation_date=$(stat -f "%B" "$file")
        echo "$creation_date \"$file\"" >> "$temp_file"
    fi
done

# Sort the files by creation date
sorted_files=$(sort -n "$temp_file")

# Rename files in sequence
counter=1
while IFS= read -r line; do
    # Extract the file name
    file_name=$(echo "$line" | awk '{print $2}' | tr -d '"')
    # Create a new file name
    new_name=$(printf "file_%03d.%s" "$counter" "${file_name##*.}")  # Retain original extension
    # Rename the file safely using quotes
    mv "$file_name" "$new_name"
    ((counter++))
done <<< "$sorted_files"

# Clean up the temporary file
rm "$temp_file"

echo "Files renamed successfully."