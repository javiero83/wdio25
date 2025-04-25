Feature: Demo feature

    @demo
    Scenario Outline: Demo Web Interactions
        Given A web page is opened
        When Perform web interactions: input
        When Perform web interactions: dropdown list
        
        Examples:
            | TestID     | 
            | DEMO_TC002 |