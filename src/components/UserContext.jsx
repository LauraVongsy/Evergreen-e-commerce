import React, { useState, createContext, useEffect } from "react";


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

    if (!email || !password) {
      console.error('Email et mot de passe requis');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
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



  const handleSignUp = async (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Mot de passe 1:', first_password);
    console.log('Mot de passe 2:', second_password);
    console.log('Nom:', userLastname);
    console.log('Prénom:', userFirstname);


    if (!email || !first_password || !second_password || !userLastname || !userFirstname) {
      console.error('Tous les champs sont requis');
      return;
    }
    if (first_password !== second_password) {
      console.error('Les mots de passe ne correspondent pas');
      return;
    }
    try {

      const response = await fetch('http://localhost:5000/api/auth/signup', {
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
    email, password, userId, setUserId, setEmail, setPassword, handleSignIn, handleSignUp, isLogged, userFirstname, setUserFirstname, setUserLastname, userLastname, setFirstPassword, setSecondPassword
  }

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  )
};

