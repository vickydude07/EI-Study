import { Device } from "../devices/Device";
import { Subject } from "../observer/Subject";

interface Schedule {
    deviceId: number;
    time: string;
    action: 'Turn On' | 'Turn Off';
}

export class Scheduler extends Subject {
    private schedules: Schedule[] = [];

    addSchedule(schedule: Schedule): void {
        this.schedules.push(schedule);
        this.notifyObservers(`Schedule added: ${schedule.deviceId} ${schedule.time} ${schedule.action}`);
    }

    getSchedules(): Schedule[] {
        return this.schedules;
    }
}