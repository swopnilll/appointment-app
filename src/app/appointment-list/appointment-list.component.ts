import { Component } from '@angular/core';

import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  
  newAppointmentTitle: string = ""
  newAppointmentDate: Date = new Date();
  
  appointments: Appointment[] = []

  addAppointment(){
    if(this.newAppointmentDate && this.newAppointmentTitle.trim().length){
      this.appointments = [...this.appointments, {
        id: Date.now(),
        title: this.newAppointmentTitle.trim(),
        date: this.newAppointmentDate
      }]
    
      this.newAppointmentDate = new Date();
      this.newAppointmentTitle = "";   
    }
  }

  deleteAppointment(id : number){
    this.appointments = [...this.appointments.filter(appointment => appointment.id !== id)];
  }
  
}
