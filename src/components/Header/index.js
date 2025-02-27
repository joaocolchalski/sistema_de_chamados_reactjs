import React, { useContext } from 'react';
import { AppContext } from '../../contexts/app';
import { LuHouse, LuUsers, LuSettings } from "react-icons/lu";
import { useLocation } from 'react-router-dom';
import avatarIgm from '../../assets/user.png'

import {
    Container,
    ContainerImgUser,
    ImgUser,
    StyledLink
} from './style';

export default function Header() {
    const { profilePhotoURL } = useContext(AppContext)

    const location = useLocation()

    return (
        <Container>
            <ContainerImgUser>
                <ImgUser src={profilePhotoURL ? profilePhotoURL : avatarIgm} alt='Imagem de Perfil do Usuário' />
            </ContainerImgUser>

            <StyledLink to={'/dashboard'} $active={location.pathname === '/dashboard' ? true : false}>
                <LuHouse /> Chamados
            </StyledLink>

            <StyledLink to={'/clients'} $active={location.pathname === '/clients' ? true : false} >
                <LuUsers /> Clientes
            </StyledLink>

            <StyledLink to={'/settings'} $active={location.pathname === '/settings' ? true : false}>
                <LuSettings /> Configurações
            </StyledLink>
        </Container>
    );
};