<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page d'accueil</title>
    <!-- Intégration de Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
<div class="max-w-4xl mx-auto px-4 py-8">
    <!-- En-tête avec logo et titre -->
    <header class="flex items-center justify-between">
        <a href="index.php" class="flex items-center space-x-2">
            <!-- Logo -->
            <img src="assets/ParadiSea.png" alt="ParadiSea" class="h-10">
            <!-- Titre -->
            <h1 class="text-2xl font-bold">ParadiSea</h1>
        </a>
        <!-- Afficher les informations de connexion ou les liens de connexion/inscription -->
        <?php if (isset($_SESSION['user_id'])): ?>
            <div class="text-right">
                <?php
                // Connexion à la base de données
                require_once('config.php');
                // Récupérer le nom d'utilisateur de l'utilisateur connecté
                $user_id = $_SESSION['user_id'];
                $query = "SELECT username FROM users WHERE id = ?";
                $stmt = $conn->prepare($query);
                $stmt->bind_param("i", $user_id);
                $stmt->execute();
                $result = $stmt->get_result();
                $user = $result->fetch_assoc();
                $username = $user['username'];
                ?>
                <span>Bienvenue, <?php echo $username; ?>!</span>
                <a href="logout.php" class="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Se
                    déconnecter</a>
            </div>
            <?php
            // Fermer la connexion à la base de données
            $stmt->close();
            $conn->close();
            ?>
        <?php else: ?>
            <div class="text-right">
                <a href="login.php" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Se
                    connecter</a>
                <a href="register.php"
                   class="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">S'inscrire</a>
            </div>
        <?php endif; ?>
    </header>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Bouton Mécanique -->
        <a href="./mecano/index.php"
           class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center">Mécanique</a>
        <!-- Bouton Gaming -->
        <a href="./gamer/index.php"
           class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block text-center">Gaming</a>
        <!-- Bouton Développeurs Web -->
        <a href="./developpement/index.php"
           class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded block text-center">Développeurs
            Web</a>
    </div>
</div>
</body>
</html>