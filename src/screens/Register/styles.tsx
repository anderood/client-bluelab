import styled from "styled-components";

export const Container = styled.div`
    /* background: rgb(106,82,255); */
    min-height: 100%;
    width: 100%;
    /* height: 100vh; */
    display: flex;
    align-content: center;
    justify-content: center;
`;

export const Form = styled.form`
    height: 100%;
`;

export const Title = styled.h1``;

export const FormContainer = styled.div`
        /* height: 100vh; */
    padding: 2rem 10.5rem;
    /* width: fit-content; */
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 25%) 0px 0px 100px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* z-index: 1; */
`;

export const ContainerName = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 4px;
`;

export const ContainerSobrenome = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    
`;

export const ContainerCPF = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    
`;

export const ContainerPhone = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    
`;

export const Label = styled.label`
    color: rgb(108, 108, 117);
    font-family: Asap;
    font-size: 14px;
    font-weight: 500;
`;

export const Input = styled.input`
    color: rgb(26, 15, 54);
    border: 2px solid rgb(233, 233, 233);
    border-radius: 16px;
    font-family: Asap;
    font-size: 14px;
    font-weight: 500;
    height: 48px;
    padding-left: 16px;
    width: 292px;
`;

export const Button = styled.button`
    background-color: rgb(128, 107, 255);
    border: 2px solid rgb(128, 107, 255);
    border-radius: 16px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    font-size: 0.875rem;
    font-weight: 700;
    height: 48px;
    opacity: 1;
    padding: 12px;
    width: 100%;
    transition: all 0.2s ease 0s;
`;