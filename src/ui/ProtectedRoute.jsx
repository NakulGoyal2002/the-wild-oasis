import React, { useEffect } from "react";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
	height: 100vh;
	align-items: center;
	justify-content: center;
	display: flex;
	background-color: var(--color-gray-50);
`;

export default function ProtectedRoute({ children }) {
	const navigate = useNavigate();

	const { isLoading, isAuthenticated } = useUser();

	useEffect(
		function () {
			if (!isAuthenticated && !isLoading) navigate("/login");
		},
		[isAuthenticated, isLoading, navigate]
	);

	if (isLoading)
		return (
			<FullPage>
				<Spinner />
			</FullPage>
		);

	if (isAuthenticated) return children;
}
