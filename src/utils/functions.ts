import toast from "react-hot-toast";
import { AxiosError } from "axios";

// local imports
import { toastType } from "./interfaces";

export const getErrorMessage = (error: unknown) => {
	const err = error as AxiosError;
	const message = err?.response?.data as { msg: string };
	return message.msg;
};

export const messageNotification = (
	messageType: toastType,
	message: string
) => {
	if (messageType === "error") {
		toast.error(message);
	} else {
		toast.success(message);
	}
};
