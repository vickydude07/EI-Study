export interface Trigger {
    checkCondition(): boolean;
    executeAction(): void;
}