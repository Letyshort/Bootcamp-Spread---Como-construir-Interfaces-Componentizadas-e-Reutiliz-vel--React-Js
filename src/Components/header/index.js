import React, {useState} from 'react';
import useGithub from '../../hooks/githubhooks';
import * as S from './styled';

const Header = () => {

    const {getUser} = useGithub();
    const [userNameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () =>{
        if (!userNameForSearch) return;
        return getUser(userNameForSearch);
    };



    return (
    <header>
        <S.Wrapper>
            <input 
            type = 'text' 
            placeholder='Digite o username para pesquisa...' 
            onChange = {(event) => setUsernameForSearch(event.target.value)} 
            />
        <button type = 'submit' onClick = {submitGetUser}>
            <span>Buscar</span>
        </button>
        </S.Wrapper>
            
    </header>
    );
    
}

export default Header;