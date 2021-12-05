import { Appointment } from '../../domain/entities/Appointment';
import { AppointmentRepository } from '../repositories/AppointmentRepository';

export class SetAcceptAppointment {
    private appointmentRepository: AppointmentRepository;

    constructor(appointmentRepository: AppointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    public async execute(id: string): Promise<Appointment> {
        return await this.appointmentRepository.setAcceptAppointment(id);
    }
}
