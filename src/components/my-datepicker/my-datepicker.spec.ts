import { flush, render } from '@stencil/core/testing';
import { Datepicker } from './my-datepicker';
import { HTMLMyDatepickerElement } from '../../components';

describe('my-name', () => {
  it('should build', () => {
    expect(new Datepicker()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMyDatepickerElement;
    beforeEach(async () => {
      element = await render({
        components: [Datepicker],
        html: '<my-name></my-name>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent).toEqual('Hello, my name is  ');
    });

    it('should work a first name', async () => {
      // element.first = 'Peter';
      await flush(element);
      expect(element.textContent).toEqual('Hello, my name is Peter ');
    });

    it('should work with a last name', async () => {
      // element.last = 'Parker';
      await flush(element);
      expect(element.textContent).toEqual('Hello, my name is  Parker');
    });

    it('should work with both a first and a list name', async () => {
      // element.first = 'Peter'
      // element.last = 'Parker';
      await flush(element);
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });
});
