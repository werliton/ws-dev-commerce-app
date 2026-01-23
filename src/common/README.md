# Principios

- Inversao de Dependencia
  - High-level modules should not depend on low-level modules. Both should depend on abstractions.
    - Abstractions should not depend on details. Details should depend on abstractions.
      - /interfaces
        - /services
          - productService.interface.ts
        - /hooks
          - useFetchProducts.ts
