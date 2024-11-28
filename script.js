// List of void elements (elements that never have children)
const VOID_ELEMENTS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

// List of inline elements
const INLINE_ELEMENTS = new Set([
  "a",
  "abbr",
  "acronym",
  "b",
  "bdo",
  "big",
  "br",
  "button",
  "cite",
  "code",
  "dfn",
  "em",
  "i",
  "img",
  "input",
  "kbd",
  "label",
  "map",
  "object",
  "output",
  "q",
  "samp",
  "script",
  "select",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "textarea",
  "time",
  "tt",
  "var",
]);

function getIndentation(depth) {
  return "  ".repeat(depth);
}

function formatAttributes(element) {
  const attributes = element.attributes;
  if (!attributes || attributes.length === 0) return "";

  return Array.from(attributes)
    .map((attr) => ` ${attr.name}="${attr.value}"`)
    .join("");
}

function formatNode(node, depth = 0, isInlineContext = false) {
  if (!node) return "";

  let output = "";

  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
      const tagName = node.tagName.toLowerCase();
      const isVoidElement = VOID_ELEMENTS.has(tagName);
      const isInline = INLINE_ELEMENTS.has(tagName);
      const needsLineBreak = !isInlineContext && !isInline;

      if (needsLineBreak) {
        output += getIndentation(depth);
      }

      output += `<${tagName}${formatAttributes(node)}>`;

      if (node.hasChildNodes()) {
        const childrenInlineContext = isInline || isInlineContext;
        for (const child of node.childNodes) {
          output += formatNode(
            child,
            depth + (childrenInlineContext ? 0 : 1),
            childrenInlineContext
          );
        }

        if (!childrenInlineContext && !isVoidElement) {
          output += "\n" + getIndentation(depth);
        }
      }

      if (!isVoidElement) {
        output += `</${tagName}>`;
      }

      if (needsLineBreak) {
        output += "\n";
      }
      break;

    case Node.TEXT_NODE:
      const text = node.textContent.replace(/\s+/g, " ").trim();
      if (text) {
        output += text;
      }
      break;
  }

  return output;
}

function printFormattedDOM() {
  const root = document.documentElement;
  console.log("Starting DOM formatting..."); // Debug line

  console.log("=== Formatted DOM Structure ===");
  console.log("<!DOCTYPE html>");
  const formattedOutput = formatNode(root);
  console.log(formattedOutput);
  console.log("========== End ==========");
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  printFormattedDOM();
});
