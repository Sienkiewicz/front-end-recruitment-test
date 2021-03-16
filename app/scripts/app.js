const App = {
  data() {
    return {
      isShowBaconTab: true,
      isShowCheckOut: false,
      personalInputs: [
        {
          test: 'input',
          label: 'fname',
          class: 'input-container half',
          inputValue: '',
          icon: 'fa fa-user',
          nameOfField: 'First Name',
          type: 'text',
          name: 'firstname',
          placeholder: 'John',
          required: false,
          maxlength: undefined,
          oninput: undefined,
          div: undefined,
          error: false,
        },
        {
          test: 'input',
          label: 'lname',
          class: 'input-container half',
          inputValue: '',
          icon: 'fa fa-user',
          nameOfField: ' Last Name',
          type: 'text',
          name: 'lname',
          placeholder: 'Doe',
          required: false,
          maxlength: undefined,
          oninput: undefined,
          div: undefined,
          error: false,
        },
        {
          test: 'input',
          label: 'email',
          class: 'input-container',
          inputValue: '',
          icon: 'fa fa-envelope',
          nameOfField: ' Last Name',
          type: 'email',
          name: 'email',
          placeholder: 'john@example.com',
          required: true,
          maxlength: undefined,
          oninput: undefined,
          div: {
            field: 'wrong email',
          },
          error: false,
        },
        {
          test: 'select',
          label: 'country',
          class: 'input-container half',
          inputValue: '',
          icon: 'fa fa-globe',
          nameOfField: 'Country',
          name: 'country',
          options: [
            { value: 'australia', name: 'Australia' },
            { value: 'canada', name: 'Canada' },
            { value: 'usa', name: 'USA' },
          ],
        },
        {
          test: 'input',
          label: 'zip',
          class: 'input-container half',
          inputValue: '',
          icon: 'fa fa-phone',
          nameOfField: ' Zip',
          type: 'text',
          name: 'zip',
          placeholder: '10001',
          required: false,
          maxlength: '5',
          oninput: `this.value=this.value.replace(/[^0-9]/g,'');`,
          div: undefined,
          error: false,
        },
        {
          test: 'input',
          label: 'phone',
          class: 'input-container',
          inputValue: '',
          icon: 'fa fa-phone',
          nameOfField: ' Phone number',
          type: 'tel',
          name: 'phone',
          placeholder: '0989078269',
          required: false,
          maxlength: undefined,
          oninput: undefined,
          div: undefined,
          error: false,
        },
      ],
      orderInputs: [
        {
          test: 'input',
          label: 'ccnum',
          class: 'input-container',
          inputValue: '',
          icon: 'fa fa-credit-card',
          inputValue: '',
          nameOfField: ' Credit card number',
          type: 'text',
          name: 'cardNumber',
          placeholder: '4111222233334444',
          required: true,
          maxlength: '16',
          oninput: `this.value=this.value.replace(/[^0-9]/g,'');`,
          div: {
            field: 'nr must start from 4 and have 12 numbers',
          },
          error: false,
        },
        {
          test: '2select',
          label: 'exp-month-and-year',
          class: 'input-container half',
          name: 'expMonthAndYear',
          inputValue: '01',
          icon: undefined,
          nameOfField: 'Exp Month and Year',
          name1: 'month',
          name2: 'year',
          options1: [
            { value: '01', name: '01' },
            { value: '02', name: '02' },
            { value: '03', name: '03' },
            { value: '04', name: '04' },
            { value: '05', name: '05' },
            { value: '06', name: '06' },
            { value: '07', name: '07' },
            { value: '08', name: '08' },
            { value: '09', name: '09' },
            { value: '10', name: '10' },
            { value: '11', name: '11' },
            { value: '12', name: '12' },
          ],
          options2: [
            { value: '01', name: '16' },
            { value: '02', name: '17' },
            { value: '03', name: '18' },
            { value: '04', name: '19' },
            { value: '05', name: '20' },
            { value: '06', name: '21' },
            { value: '07', name: '22' },
            { value: '08', name: '23' },
            { value: '09', name: '24' },
            { value: '10', name: '25' },
          ],
          required: true,
          div: undefined,
          error: false,
        },
        {
          test: 'input',
          label: 'cvv',
          class: 'input-container half',
          inputValue: '',
          icon: undefined,
          nameOfField: ' CVV',
          type: 'text',
          name: 'cvv',
          placeholder: '352',
          required: true,
          maxlength: '3',
          oninput: `this.value=this.value.replace(/[^0-9]/g,'');`,
          div: {
            field: `It's required and have 3 numbers`,
          },
          error: false,
        },
      ],
    }
  },
  methods: {
    showCheckout() {
      this.isShowBaconTab = false
      this.isShowCheckOut = true
    },
    showBaconTab() {
      this.isShowBaconTab = true
      this.isShowCheckOut = false
    },
    onSubmit() {
      const isError = state => {
        return state.find(el => el.error === true)
      }

      if (isError(this.personalInputs) || isError(this.orderInputs)) {
        alert('Error')
        return
      }

      alert('Fine')
    },
  },
}

const app = Vue.createApp(App)

app.component('input-field', {
  props: ['input'],
  template: ` <div  :class=input.class>
                <label :for=input.label>
                  <i :class=input.icon></i>
                    {{input.nameOfField}}
                </label>
                <input
                v-if='input.test === "input"'
                  :type=input.type
                  :id=input.label
                  :name=input.name
                  :placeholder=input.placeholder
                  :required=input.required
                  :maxlength=input.maxlength
                  :oninput=input.oninput
                  v-model=input.inputValue
                />
                
                <select 
                v-if='input.test === "select"' 
                :id=input.label 
                :name=input.name>
                  <select-field 
                    v-for="option in input.options"
                    :option="option"
                    :key="option.name"
                  ></select-field>
                </select>

                <div v-if='input.test === "2select"' class="exp-month-and-year">
                  <select 
                  :id=input.name1 
                  :name=input.name1
                  :required=input.required
                  >
                    <select-field 
                      v-for="option in input.options1"
                      :option="option"
                      :key="option.name"
                    ></select-field>
                  </select>
                  <p>/</p>
                  <select 
                  :id=input.name2 
                  :name=input.name2
                  v-model=input.inputValue
                  >
                    <select-field 
                      v-for="option in input.options2"
                      :option="option"
                      :key="option.name"
                    ></select-field>
                  </select>
                </div>
                <div v-if=input.error class="error"> {{input.div.field}} </div>
              </div>
              `,
  watch: {
    input: {
      handler(v) {
        let name = v.name
        let value = v.inputValue
        const validation = isValid => {
          this.input.error = isValid ? false : true
        }
        switch (name) {
          case 'email':
            {
              const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                value
              )
              validation(isValid)
            }
            break
          case 'cardNumber':
            {
              const isValid = /^((4\d{3})|(5[1-5]\d{2}))(-?|\040?)(\d{4}(-?|\040?)){3}|^(3[4,7]\d{2})(-?|\040?)\d{6}(-?|\040?)\d{5}/i.test(
                value
              )
              validation(isValid)
            }
            break
          case 'cvv':
            {
              const isValid = /^\d{3}$/i.test(value)
              validation(isValid)
            }
            break
          default:
            console.log('did not find name of input')
        }
      },
      deep: true,
    },
  },
})

app.component('select-field', {
  props: ['option'],
  template: `
              <option :value=option.value>
                {{option.name}}
              </option>
              `,
})

app.component('shopping-card', {
  template: `
              <div class="col-35">
                      <div class="order">
                        <p>
                          Your order
                          <span class="price" style="color: black">
                            <i class="fa fa-shopping-cart"></i>
                            <b>2</b>
                          </span>
                        </p>

                        <div>
                          <p class="itemOfOrder">Apple watch Sport</p>
                          <span class="price">$ 580</span>
                        </div>

                        <div>
                          <p class="itemOfOrder">Modern Buckle</p>
                          <span class="price">$ 380</span>
                        </div>
                        <div class="divide"></div>
                        <hr />
                        <div>
                          <p class="itemOfOrder">Total purchases</p>
                          <span class="price">$ 960.00</span>
                        </div>
                        <div>
                          <p class="itemOfOrder">Estimated tax</p>
                          <span class="price">$ 0</span>
                        </div>
                        <hr />
                        <p>
                          Total
                          <span class="total" style="color: black">$ 960</span>
                        </p>
                      </div>
                    </div>
  `,
})

app.component('title-form', {
  props: ['title', 'nr'],
  template: `
              <div class="text-row">
                    <p>{{nr}}</p>
                    <div class="divider"></div>
                    <h2> {{title}} </h2>
                  </div>
  `,
})

app.mount('#app')
