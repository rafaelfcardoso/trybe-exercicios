#2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT (MAX_SALARY - MIN_SALARY) FROM jobs AS `diff`;

#3. 🚀 Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT JOB_TITLE, (MAX_SALARY + MIN_SALARY)/2 FROM jobs;