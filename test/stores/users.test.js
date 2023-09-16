import { beforeEach, describe, expect } from "vitest";
import { useUserStore } from "../../stores/users";
import { createPinia, setActivePinia } from "pinia";




describe("user state", ()=>{

   beforeEach(()=>{
     setActivePinia(createPinia())
   });

    it("checks user is not loggen in ", ()=>{
        const store = useUserStore();
         expect(store.isLoggedIn).toBe(false);
    });
});


describe("actions", ()=>{

        beforeEach(()=>{
            setActivePinia(createPinia())
        }); 

    describe("user is log in", ()=>{
        it("checks user is logged in ", ()=>{
            const store = useUserStore();
             expect(store.isLoggedUser()).toBe(true);
        })
    })
 });


