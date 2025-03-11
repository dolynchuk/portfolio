export function Invert() {
    return <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={0} height={0}>
        <defs>
            <filter id="invertFilter">
                <feComponentTransfer>
                    <feFuncR type="table" tableValues="1 0" />
                    <feFuncG type="table" tableValues="1 0" />
                    <feFuncB type="table" tableValues="1 0" />
                </feComponentTransfer>
            </filter>
        </defs>
    </svg>
}