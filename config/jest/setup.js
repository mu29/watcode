import React from 'react'
import { mount, render, shallow, configure } from 'enzyme'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'store/configure'
import { basicTheme } from 'components/themes'

configure({ adapter: new Adapter() })

global.mount = mount
global.render = render
global.shallow = shallow

global.withTheme = component => React.cloneElement(component, { theme: basicTheme })

const store = configureStore({})
global.withStore = component => (
  <Provider store={ store }>
    { React.cloneElement(component) }
  </Provider>
)
