import React, { useState, createContext, useEffect } from "react";
import { BASEURL } from '../App'



export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_password, setFirstPassword] = useState('');
  const [second_password, setSecondPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    // Vérifier la présence du token au chargement initial
    const token = localStorage.getItem('token');


    if (token) {
      // Si le token est présent, l'utilisateur est connecté
      setIsLogged(true);
      setUserFirstname(localStorage.getItem('userFirstname'));
      // Vous pourriez également extraire d'autres informations du token si nécessaire
    }
  }, []); // Le tableau vide [] signifie que cela ne s'exécutera qu'une fois au chargement initial

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email) || !password) {
      console.error('Email correct et mot de passe requis');
      setErrorMessage('Email correct et mot de passe requis');
      return;
    }

    try {
      const response = await fetch(`${BASEURL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const result = await response.json();
        const { token, userId, userFirstname, userLastname } = result;

        console.log('Réponse du serveur:', result);

        // Stockage du token dans le localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('userFirstname', userFirstname);

        setUserId(userId);
        setUserFirstname(userFirstname);
        setUserLastname(userLastname);
        setIsLogged(true);

        // Nettoyer le mot de passe en mémoire
        setPassword('');
      } else {
        const error = await response.json();
        console.error('Erreur du serveur:', error);
        setErrorMessage('Mot de passe invalide');
        console.log(errorMessage);


      }
    } catch (error) {
      console.error('Erreur lors de la requête d\'authentification:', error);
      setErrorMessage('Une erreur s\'est produite lors de la connexion. Veuillez réessayer.');
      console.log(errorMessage);

    }
  };



  const handleSignUp = async (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Mot de passe 1:', first_password);
    console.log('Mot de passe 2:', second_password);
    console.log('Nom:', userLastname);
    console.log('Prénom:', userFirstname);


    if (!emailRegex.test(email) || !first_password || !second_password || !userLastname || !userFirstname) {
      console.error('Tous les champs sont requis, vérifiez le format de votre email');
      return;
    }
    if (first_password !== second_password) {
      console.error('Les mots de passe ne correspondent pas');
      return;
    }
    try {

      const response = await fetch(`${BASEURL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userLastname,
          userFirstname,
          email,
          password: first_password, // Utilisez le mot de passe du premier champ
        }),
      });

      if (response.ok) {
        const result = await response.json();
        const { token, userId, userFirstname, userLastname } = result;

        console.log('Réponse du serveur:', result);

        // Stockage du token dans le localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('userFirstname', userFirstname);

        setUserId(userId);
        setUserFirstname(userFirstname);
        setUserLastname(userLastname);
        setIsLogged(true);

        setFirstPassword('');
        setSecondPassword('');

        // Vous pourriez également rediriger l'utilisateur vers une autre page ici
      } else {
        const error = await response.json();
        console.error('Erreur du serveur:', error);
        // Gérez l'erreur d'authentification côté client
      }

    } catch (error) {
      console.error('Erreur lors de la requête d\'authentification:', error);
      // Gérez les erreurs de requête côté client
    }
  };





  const userData = {
    email, password, userId, setUserId, setEmail, setPassword, handleSignIn, handleSignUp, setIsLogged, isLogged, userFirstname, setUserFirstname, setUserLastname, userLastname, setFirstPassword, setSecondPassword
  }

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  )
};

