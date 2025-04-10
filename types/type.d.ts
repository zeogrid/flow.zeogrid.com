export interface PopupBarState {
    isVisible: boolean;
    message: string;
    type: 'info' | 'warning' | 'error'; 
}