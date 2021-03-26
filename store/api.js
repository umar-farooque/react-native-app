import { createAction } from "@reduxjs/toolkit";

export const apiCallBeganForPost = createAction("api/CallBeganForPost");
export const apiCallSuccesfulForPost = createAction("api/CallSuccesfulForPost");
export const apiCallFailed = createAction("api/Callfailed");
