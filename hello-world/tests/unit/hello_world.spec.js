import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders hello world component", () => {
    const wrapper = shallowMount(HelloWorld);

    const component = wrapper.find(".hello");

    expect(component.classes()).toContain("hello");
    expect(wrapper.vm.counter).toBe(0);

    wrapper.vm.increment();
    expect(wrapper.vm.counter).toBe(1);
  });
});
