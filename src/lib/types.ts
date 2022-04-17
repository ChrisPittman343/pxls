export interface Notification {
	name: string;
	type: NotificationType;
	time: number;
}
export type NotificationType = 'success' | 'warning' | 'error';

export type ColorFormat = 'rgb' | 'hex' | 'hsv' | 'hsl';
export const COLOR_FORMATS: ColorFormat[] = ['hex', 'rgb', 'hsv', 'hsl'];

export type OutputFormat = 'CSS' | 'CSV' | 'Custom';
export const OUTPUT_FORMATS: OutputFormat[] = ['CSS', 'CSV', 'Custom'];
