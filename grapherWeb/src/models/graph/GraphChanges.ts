

import type { Graph } from "./Graph"

export type GraphChanges = Omit<Partial<Graph>, 'id'>