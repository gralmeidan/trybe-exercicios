SELECT CONCAT(
    'Existem ',
    COUNT(*),
    ' cientistas na tabela Scientists.'
  ) as 'Contagem'
FROM Scientists;