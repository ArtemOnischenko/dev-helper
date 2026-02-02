import type { PagesPathType } from "../types/pages-path.type"

export const PagesPath: PagesPathType = {
    home: "/",
    timestamp: "/timestamp",
    json: "/json"
}

export const PathToMenuKey: Record<string, string> = {
    [PagesPath.home]: "home",
    [PagesPath.timestamp]: "timestamp",
    [PagesPath.json]: "json"
}