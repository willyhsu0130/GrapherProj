import { useMemo } from "react"
import { debounce } from "lodash"
import type { PatchGraphRequest } from "@/models/API/APITypes"
import { patchGraphById } from "@/services/fetchers"

export const useGraphSave = (id: string) => {

    const debouncedSave = useMemo(() =>
        debounce(async (changes: Omit<PatchGraphRequest, 'id'>) => {
            const res = await patchGraphById({ ...changes, id: parseInt(id) })
            if (!res.success) {
                console.log(res.message)
                alert(res.message)
            }
        }, 500)
        , [id])

    return { debouncedSave }
}