import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-example',
  templateUrl: './formly-example.component.html',
  styleUrls: ['./formly-example.component.scss']
})
export class FormlyExampleComponent {
  formlyFormGroup = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      props: {
        label: 'Text',
        placeholder: 'Formly is terrific!',
        required: true,
      },
    },
    {
      key: 'nested.story',
      type: 'textarea',
      props: {
        label: 'Some sweet story',
        placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',
        description: '',
      },
      expressions: {
        focus: 'formState?.awesomeIsForced',
        'props.description': ({ options }) => {
          if (options?.formState?.awesomeIsForced) {
            return 'And look! This field magically got focus!';
          }

          return '';
        },
      },
    },
    {
      key: 'awesome',
      type: 'checkbox',
      props: { label: '' },
      expressions: {
        'props.disabled': 'formState.awesomeIsForced',
        'props.label': ({ options }) => {
          if (options?.formState?.awesomeIsForced) {
            return 'Too bad, formly is really awesome...';
          } else {
            return 'Is formly totally awesome? (uncheck this and see what happens)';
          }
        },
      },
    },
    {
      key: 'whyNot',
      type: 'textarea',
      props: {
        label: 'Why Not?',
        placeholder: 'Type in here... I dare you',
      },
      expressions: {
        hide: 'model.awesome',
        'props.placeholder': ({ options }) => {
          if (options?.formState?.awesomeIsForced) {
            return `Too bad... It really is awesome! Wasn't that cool?`;
          } else {
            return 'Type in here... I dare you';
          }
        },
        'props.disabled': 'formState.awesomeIsForced',
      },
    },
    {
      key: 'text4',
      type: 'input',
      props: {
        label: 'Text4',
        placeholder: 'Type here to see the other field become enabled...',
      },
    },
    {
      key: 'text2',
      type: 'input',
      props: {
        label: 'Hey!',
        placeholder: 'This one is disabled if there is no text in the other input',
      },
      expressions: {
        'props.disabled': '!model.text4',
        'hide':'!model.text4'
      },
    },
    {
      key: 'firstName',
      type: 'input',
      defaultValue: 'This is a default value',
      props: {
        label: 'First Name (initialized via default value)',
      },
    },
    {
      key: 'lastName',
      type: 'input',
      defaultValue: 'This is a default value',
      props: {
        label: 'Last Name (initialized via the model)',
      },
    },
    {
      key: 'candy',
      type: 'select',
      defaultValue: 'milky_way',
      props: {
        label: 'Favorite Candy (initialized via default value',
        options: [
          { label: 'Snickers', value: 'snickers' },
          { label: 'Baby Ruth', value: 'baby_ruth' },
          { label: 'Milky Way', value: 'milky_way' },
        ],
      },
    },
    {
      key: 'agree',
      type: 'checkbox',
      props: {
        label: 'Agree? (not initialized at all)',
        required: true,
      },
    },
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name (required)',
        required: true,
      },
    },
    {
      key: 'age',
      type: 'input',
      props: {
        label: 'Age (min= 18, max= 40)',
        type: 'number',
        min: 18,
        max: 40,
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      props: {
        label: 'Password (minLength = 6)',
        type: 'password',
        required: true,
        minLength: 6,
      },
    },
    {
      key: 'comment',
      type: 'textarea',
      props: {
        label: 'Comment (maxLength = 100)',
        required: true,
        maxLength: 100,
        rows: 5,
      },
    },
    {
      key: 'ip',
      type: 'input',
      props: {
        label: 'IP Address (pattern = /(d{1,3}.){3}d{1,3}/)',
        pattern: /(\d{1,3}\.){3}\d{1,3}/,
        required: true,
      },
      validation: {
        messages: {
          pattern: (error: any, field: FormlyFieldConfig) => `"${field.formControl?.value}" is not a valid IP Address`,
        },
      },
    },
  ];

  submit() {
    if (this.formlyFormGroup.valid) {
      alert(JSON.stringify(this.model));
      console.log('formlyFormGroup :',this.formlyFormGroup.value);
    }
  }
}
