# Vitality Interview Task

## Task

Create a new Accordion component based on the following requirements:

### Design

[Figma Design](https://www.figma.com/design/4awuUFzwh93kquDTq0PTfx/Recruitment-task?node-id=1-131&t=gWANYTH4eE9KzhNK-0)

### Requirements

[Requirements Link](https://trello.com/c/qUX1aHa0/1-create-a-new-accordion-component-click-for-full-requirements)

1. The component should match the provided Figma design.
2. The component should be supported on mobile, tablet, and desktop devices.
3. The Accordion panels should be minimised by default.
4. When a user clicks an Accordion panel, it should expand to show the content within.
5. When a user clicks on an expanded Accordion panel, it should return to the default minimised state.
6. Users should be able to have multiple Accordion panels open at the same time.
7. The entire row of each Accordion panel should have the relevant event listener applied (expand and minimise).
8. The component should be coded with accessibility best practices in mind.
9. Two variants of the component are required: one in HTML, Sass/SCSS, and vanilla JavaScript, and the other using React.
10. Block Element Modifier methodology should be used when creating the component.
11. The component should be supported on the latest versions of MS Edge, Chrome, Firefox, and Safari.

---

## Environment Links

- [React Version](https://vitality-task-react.web.app/)
- [HTML/SCSS/Javascript Version](https://martinshelley.github.io/vitality-task/vanilla-versions/javascript-version/)
- [Extra Semantic Version](https://martinshelley.github.io/vitality-task/vanilla-versions/semantic-version/)

---

## Notes

During implementation, I found a nice semantic approach to the task that didn't need any Javascript. However I was aware that I would be judged on my vanilla javascript so I have included an extra version ("Semantic Version") as part of the delivery. This version uses the `<details>` & `<summary>` tags, which allow for toggling content without the use of Javascript and includes built in accessibility features.

## Further Improvement 

During the previous interview, I was made aware that Vitality potentially uses a Javascript feature called Web Components. For this task, I would include the use of Web Components in the Javascript version, rather than repeating code within the HTML file, and contain the logic to each component.
