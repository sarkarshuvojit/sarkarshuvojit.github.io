import * as React from "react";
import "./App.css";
import { TerminalContextProvider } from "react-terminal";
import { ReactTerminal } from "react-terminal";

const SOCIALS = {
    "linkedin": "https://www.linkedin.com/in/sarkarshuvojit/",
    "github": "https://github.com/sarkarshuvojit",
    "stackoverflow": "https://stackoverflow.com/users/2976015/shuvojit",
    "blog": "https://blog.shuvojit.in/",
}
const SOCIALS_KEYS = Object.keys(SOCIALS);

function getSocials(socials_choice) {

    if (!SOCIALS_KEYS.includes(socials_choice))
        return `Invalid choice, valid choices: ${SOCIALS_KEYS.join(',')}` 

    const socialLink = SOCIALS[socials_choice];
    return (
        <a 
            target="_blank" 
            rel="noreferrer"
            href={socialLink}>{socialLink}</a>
    )
}

const App = () => {
  const [theme, setTheme] = React.useState("dark");
  const [controlBar, setControlBar] = React.useState(true);
  const [controlButtons, setControlButtons] = React.useState(true);
  const [prompt, setPrompt] = React.useState(">>>");

  const commands = {
    help: (
      <span>
        <strong>clear</strong> - clears the console. <br />
        <strong>socials &lt;choice&gt;</strong> - access social links; choices [{SOCIALS_KEYS.join(', ')}]<br /><br />
        ----<strong>more commands coming</strong>----
        <br />
        Made mostly by cloning a <a rel="noreferrer" href="https://github.com/bony2023/react-terminal" target="_blank">repo</a> and editing the source code.
      </span>
    ),

    change_prompt: (prompt) => {
      setPrompt(prompt);
    },

    change_theme: (theme) => {
      const validThemes = [
        "light",
        "dark",
        "material-light",
        "material-dark",
        "material-ocean",
        "matrix",
        "dracula",
      ];
      if (!validThemes.includes(theme)) {
        return `Theme ${theme} not valid. Try one of ${validThemes.join(", ")}`;
      }
      setTheme(theme);
    },

    toggle_control_bar: () => {
      setControlBar(!controlBar);
    },

    toggle_control_buttons: () => {
      setControlButtons(!controlButtons);
    },

    evaluate_math_expression: async (expr) => {
      const response = await fetch(
        `https://api.mathjs.org/v4/?expr=${encodeURIComponent(expr)}`
      );
      return await response.text();
    },
    
    myCommand: () => {
        return "Helloh";
    },

    socials: (socials_choice) => {
        return getSocials(socials_choice);
    },
  };

  const welcomeMessage = (
    <span>
      Type "help" for all available commands. <br />
    </span>
  );

  return (
    <div className="App">
      <TerminalContextProvider>
        <ReactTerminal
          prompt={prompt}
          theme={theme}
          showControlBar={controlBar}
          showControlButtons={controlButtons}
          welcomeMessage={welcomeMessage}
          commands={commands}
          defaultHandler={(command, commandArguments) => {
            return (
                <>
                {command} is an unrecognized command, use <strong>socials</strong> command and ask me to add it
                </>
            );
          }}
        />
      </TerminalContextProvider>
    </div>
  );
}

export default App;
