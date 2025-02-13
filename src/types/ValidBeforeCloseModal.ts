import {BeforeCloseModalData} from "./BeforeCloseModalData.ts";

export type ValidBeforeCloseModal = Function | undefined | ((data: BeforeCloseModalData) => void);