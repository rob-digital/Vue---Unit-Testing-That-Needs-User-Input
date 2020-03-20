import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

// 1. create test suit
describe('AppHeader', () => {
    // 2. set up your test
    test('If user is not logged in, do not show logout button', () => {
       // 3. mount the component with vue-test-utils
        const wrapper = mount(AppHeader)
        // 4. set data if necessary - not need to set it here, because the default value is 'false', 
        // - it comes from AppHeader.vue data

        // 5. Assert what the result should be
        expect(wrapper.find('button').isVisible()).toBe(false)
    })
    
    test('If user is logged in, show logout button', async () => {  // make test async / await, and rely on $nextTick(),
        const wrapper = mount(AppHeader)
        // 4. set data if necessary
        wrapper.setData({loggedIn: true})  // setting our data value
        
        // 5. Assert what the result should be
        await wrapper.vm.$nextTick()
        expect( wrapper.find('button').isVisible() ).toBe(true)
    })
})