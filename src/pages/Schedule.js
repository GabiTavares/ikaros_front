import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import { CheckBox } from 'devextreme-react/check-box';
import notify from 'devextreme/ui/notify';
import 'devextreme/dist/css/dx.material.blue.light.css';
import { data } from './data.js';
import '../styles/Schedule.css';

const currentDate = new Date(2023, 7, 10);
const views = ['day', 'week', 'month', 'agenda'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allowAdding: true,
      allowDeleting: true,
      allowResizing: true,
      allowDragging: true,
      allowUpdating: true,
    };
    this.onAllowAddingChanged = this.onAllowAddingChanged.bind(this);
    this.onAllowDeletingChanged = this.onAllowDeletingChanged.bind(this);
    this.onAllowResizingChanged = this.onAllowResizingChanged.bind(this);
    this.onAllowDraggingChanged = this.onAllowDraggingChanged.bind(this);
    this.onAllowUpdatingChanged = this.onAllowUpdatingChanged.bind(this);
    this.showAddedToast = this.showAddedToast.bind(this);
    this.showUpdatedToast = this.showUpdatedToast.bind(this);
    this.showDeletedToast = this.showDeletedToast.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={data}
          views={views}
          defaultCurrentView="month"
          defaultCurrentDate={currentDate}
          startDayHour={7}
          endDayHour={20}
          height={600}
          width={1278}
          editing={this.state}
          onAppointmentAdded={this.showAddedToast}
          onAppointmentUpdated={this.showUpdatedToast}
          onAppointmentDeleted={this.showDeletedToast}
        />
        <div className="options">
          <div className="caption">Options</div>
          <div className="options-container">
            <div className="option">
              <CheckBox
                defaultValue={this.state.allowAdding}
                text="Permitir adicionar"
                onValueChanged={this.onAllowAddingChanged}
              />
            </div>
            <div className="option">
              <CheckBox
                defaultValue={this.state.allowDeleting}
                text="Permitir exclusão"
                onValueChanged={this.onAllowDeletingChanged}
              />
            </div>
            <div className="option">
              <CheckBox
                defaultValue={this.state.allowUpdating}
                text="Permitir Atualização"
                onValueChanged={this.onAllowUpdatingChanged}
              />
            </div>
            <div className="option">
              <CheckBox
                defaultValue={this.state.allowResizing}
                text="Permitir Redimencionamento"
                onValueChanged={this.onAllowResizingChanged}
                disabled={!this.state.allowUpdating}
              />
            </div>
            <div className="option">
              <CheckBox
                defaultValue={this.state.allowDragging}
                text="Permitir Arrastar"
                onValueChanged={this.onAllowDraggingChanged}
                disabled={!this.state.allowUpdating}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  onAllowAddingChanged(e) {
    this.setState({ allowAdding: e.value });
  }

  onAllowDeletingChanged(e) {
    this.setState({ allowDeleting: e.value });
  }

  onAllowResizingChanged(e) {
    this.setState({ allowResizing: e.value });
  }

  onAllowDraggingChanged(e) {
    this.setState({ allowDragging: e.value });
  }

  onAllowUpdatingChanged(e) {
    this.setState({ allowUpdating: e.value });
  }

  showToast(event, value, type) {
    notify(`${event} "${value}" task`, type, 800);
  }

  showAddedToast(e) {
    this.showToast('Adicionado', e.appointmentData.text, 'sucess');
  }

  showUpdatedToast(e) {
    this.showToast('Atualizado', e.appointmentData.text, 'info');
  }

  showDeletedToast(e) {
    this.showToast('Deletado', e.appointmentData.text, 'warning');
  }
}

export default App;
