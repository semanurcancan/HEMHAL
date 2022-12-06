export interface TitleObjectType {
	name: string
	icon: string
	inventoryChildren?: TitleObjectType[]
	children: {
		name: string
		icon: string
		children?: {
			name: string
			icon: string
		}[]
	}[]
}

export interface FavoriteObjectType {
	name: string
	icon: string
}
