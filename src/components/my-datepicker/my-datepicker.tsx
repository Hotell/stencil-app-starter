import { Component, Prop, Element, PropWillChange } from '@stencil/core'
import flatpickr from 'flatpickr'

export type Options = flatpickr.Options

@Component({
  tag: 'my-datepicker',
  styleUrl: 'my-datepicker.scss',
})
export class Datepicker {
  static defaultOptions: flatpickr.Options = {
    wrap: false,
    mode: 'single',
    enableTime: false,
  }

  @Prop()
  options = {
    ...Datepicker.defaultOptions,
  } as flatpickr.Options
  @Element() host: HTMLElement

  private flatpickr: flatpickr

  @PropWillChange('options')
  handleOptionsChange(options: flatpickr.Options) {
    const newOptions = {
      ...Datepicker.defaultOptions,
      ...options,
    } as flatpickr.Options

    for (const setting of Object.keys(newOptions)) {
      this.flatpickr.set(setting, newOptions[setting])
    }
  }

  render() {
    return (
      <div>
        Flatpickr:
        <pre>{JSON.stringify(this.options, null, 2)}</pre>
        <div>
          <input is-datepicker />
        </div>
      </div>
    )
  }
  componentDidLoad() {
    const container = this.host.querySelector('[is-datepicker]') as HTMLInputElement
    this.flatpickr = new flatpickr(container, this.options)
  }
}
