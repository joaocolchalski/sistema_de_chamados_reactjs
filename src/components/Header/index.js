import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/app';
import { LuHouse, LuUsers, LuSettings } from "react-icons/lu";
import { useLocation } from 'react-router-dom';

import {
    Container,
    ContainerImgUser,
    ImgUser,
    ContainerButtonsNav,
    StyledLink
} from './style';

export default function Header() {
    const { profilePhotoURL } = useContext(AuthContext)

    const location = useLocation()

    return (
        <Container>
            <ContainerImgUser>
                <ImgUser photoURL={profilePhotoURL ? `${profilePhotoURL}` : require('../../assets/user.png')} alt='Imagem de Perfil do Usuário' />
            </ContainerImgUser>

            <ContainerButtonsNav>
                <StyledLink to={'/home'} active={location.pathname === '/home' ? true : false}>
                    <LuHouse /> Chamados
                </StyledLink>

                <StyledLink to={'/clients'} active={location.pathname === '/clients' ? true : false} >
                    <LuUsers /> Clientes
                </StyledLink>

                <StyledLink to={'/settings'} active={location.pathname === '/settings' ? true : false}>
                    <LuSettings /> Configurações
                </StyledLink>
            </ContainerButtonsNav>
        </Container>
    );
};