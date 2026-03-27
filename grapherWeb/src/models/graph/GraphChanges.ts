

import type { PatchGraphRequest } from "../API/APITypes"

export type GraphChanges = Omit<Partial<PatchGraphRequest>, 'id'>