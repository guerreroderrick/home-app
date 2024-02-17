'use client'
import { useEventCallback } from "@mui/material";
import { MRT_ColumnDef, MaterialReactTable, useMaterialReactTable } from "material-react-table"
import { ClipboardEvent, useMemo } from "react"


interface PlainSchema {
    '0': string;
    '1': string;
}

export default function Home() {
    const columns = useMemo(() => new Array(3).fill(0).map((_, i) => {
        return {
            header: 'test' + i,
            accessorFn: (_: object[] | number[] | string[]) => _[i]
        }
    }), [])
    const data = useMemo(() => [['a','b','c'], ['d', 'e', 'f']], [])
    const table = useMaterialReactTable({
        columns: columns,
        data: data,
        enableEditing: true,
        editDisplayMode: 'table',
    })
    const handlePaste = useEventCallback((event: ClipboardEvent<HTMLDivElement>) => {
        console.log({clipboardData: event.clipboardData})
        event.preventDefault()

    })
    return (<div onPaste={handlePaste}>
        <MaterialReactTable table={table} />
    </div>)
}