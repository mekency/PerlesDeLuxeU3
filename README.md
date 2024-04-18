### Contribution de Yacine 

Je me suis charge de faire l'HTML  des  pages register, services et signup. ainsi que le CSS des pages register et signup. 

 Pour la partie 2 de project je me suis charge de JavaScript utilisée pour valider un formulaire d'inscription.
 ![image](https://github.com/mekency/PerlesDeLuxeU3/assets/162185403/76d446b1-286f-4647-b6f6-f1cb347edd42)

- J'ai commence par la collecte des valeurs des champs d’e-mail 'signupEmail', de mot de passe 'signupPassword' et de confirmation de mot de passe 'confirmPassword' depuis le formulaire HTML.

- J'ai mis en place une expression  "emailRegex", pour valider le format de l'adresse e-mail entrée. Si j'ai un champ e-mail vide ou si l'adresse ne correspond pas au schéma défini par emailRegex, j'affiche un message d'erreur et je renvoie false de la fonction, ce qui signale une erreur dans les informations fournies du formulaire.

-  Le mot de passe est vérifié pour s'assurer qu'il n'est pas vide et qu'il a au moins 6 caractères. Si cette condition n'est pas remplie, un message d'erreur est affiché et la fonction retourne false.

-  J'ai ensuite un contrôle pour vérifier que le mot de passe et la confirmation du mot de passe sont identiques. Si les deux ne correspondent pas, j'affiche un message d'erreur et j'indique un échec de validation en retournant false de la fonction.


