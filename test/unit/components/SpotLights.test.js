import axios from "axios";
import { render, screen } from "@testing-library/vue";
import { expect } from "vitest";
import SpotLights from "../../../src/components/SpotLights.vue";

vi.mock("axios");

describe("spotlight test", ()=>{


    it("provides img to the parent", async()=>{

         axios.get.mockResolvedValue({
            data: [
                {
                    id: 1,
                    img:"url pic",
                    title: "carrier image",
                    description: "this is a great carrier"
                },
            ],
         });


         render(SpotLights, {
            slots: {
                default: `<template #default="slotProps">
                     <h1>{{slotProps.img}}</h1>
                </template>`
            }
         });

         const imageText = await screen.findByText("url pic")

         expect(imageText).toBeInTheDocument();
    });
});








