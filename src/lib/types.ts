export interface Notification {
	name: string;
	type: 'success' | 'warning' | 'error';
	time: number;
}
