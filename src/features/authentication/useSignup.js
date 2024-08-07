import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import React from "react";
import toast from "react-hot-toast";

export default function useSignup() {
	const { mutate: signup, isPending: isLoading } = useMutation({
		mutationFn: signupApi,
		onSuccess: (user) => {
			console.log(user);
			toast.success(
				"Account successfully created! Please verify the new account from the user's email address"
			);
		},
	});
	return { isLoading, signup };
}
