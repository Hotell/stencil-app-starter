import { Component, State } from '@stencil/core'
import { Options } from '../my-datepicker/my-datepicker'
import { json } from '../utils'

@Component({
  tag: 'my-app',
})
export class MyApp {
  private dpModes = ['single', 'range', 'multiple']
  private handleCheckboxChange = ({ target }: Event) => {
    const { name, checked, value, type } = target as HTMLInputElement
    const newState = {
      ...this.datepickerOptions,
      [name]: type === 'checkbox' ? Boolean(checked) : value,
    }
    this.datepickerOptions = newState
  }
  @State() datepickerOptions: Options = {}
  render() {
    return (
      <div>
        <h1>My App</h1>
        <main>
          <div>
            <label>
              <input
                type="checkbox"
                checked={this.datepickerOptions.wrap}
                name="wrap"
                onChange={this.handleCheckboxChange}
              />{' '}
              wrap
            </label>
            <label>
              <input
                type="checkbox"
                checked={this.datepickerOptions.enableTime}
                name="enableTime"
                onChange={this.handleCheckboxChange}
              />{' '}
              enableTime
            </label>
            <label>
              <select name="mode" onChange={this.handleCheckboxChange}>
                {this.dpModes.map(mode => <option>{mode}</option>)}
              </select>
              Mode:
            </label>
            <pre>
              {json(this.datepickerOptions)}
            </pre>
          </div>
          <my-datepicker options={this.datepickerOptions}/>
        </main>
      </div>
    )
  }
}
