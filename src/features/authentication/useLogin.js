import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export default function useLogin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { mutate: login, isPending: isLoading } = useMutation({
		mutationFn: ({ email, password }) => loginApi({ email, password }),
		onSuccess: (user) => {
			queryClient.getQueryData(["user"], user.user);
			navigate("/dashboard", { replace: true });
		},
		onError: (err) => {
			console.log("Error", err);

			toast.error("Provided email or password are incorrect");
		},
	});

	return { login, isLoading };
}
