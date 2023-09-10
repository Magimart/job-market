import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/vue";
import { expect,  afterEach } from "vitest";
// import matchers from "@testing-library/jest-dom/types/matchers";


expect.extend(matchers );

// this helps to avoid bugs by cleaning up after each and every test made
afterEach(()=>{
    cleanup();
})