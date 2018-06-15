import React from 'react'
import { mount, render, shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { basicTheme } from 'components/themes'

configure({ adapter: new Adapter() })

global.mount = mount
global.render = render
global.shallow = shallow

global.withTheme = component => React.cloneElement(component, { theme: basicTheme })
