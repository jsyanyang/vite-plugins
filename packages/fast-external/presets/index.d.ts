
export interface LibMeta {
  name: string
  members: string[]
}

export declare function libMeta2external(libMeta: LibMeta): () => string

export declare const antd_vue_v1: () => string
export declare const antd_vue_v3: () => string
export declare const antd_v4: () => string
export declare const element_plus: () => string
export declare const element_ui: () => string
export declare const react_dom_v17: () => string
export declare const react_dom_v18: () => string
export declare const react_v17: () => string
export declare const react_v18: () => string
export declare const vue_composition_api: () => string
export declare const vue_v2: () => string
export declare const vue_v3: () => string
