import {
  Accordion,
  type AccordionItemConfig,
} from "../../components/Accordion";
import { PrintButton } from "../../components/PrintButton";

type FoodNamePageProps = {
  activeSectionId?: string | null;
};

const generalRequirements: AccordionItemConfig[] = [
  {
    id: "about-food-names",
    title: "About food names",
    content: (
      <>
        <p>
          Food names must correctly describe the food. For example, strawberry
          yoghurt must contain strawberries. If the yoghurt contains strawberry
          flavouring instead of the fruit, then the name would need to be
          strawberry-flavoured yoghurt.
        </p>
        <p>
          The Food Standards Code includes definitions for many foods, which
          includes what a food is made of. For example, a fruit juice cannot
          contain added water but a fruit drink can have water added.
        </p>
        <p>
          Some food have names that must be used (
          
          <a
            href="#prescribed-names"
            onClick={(e) => {
              e.preventDefault();
              const item = document.getElementById("accordion-item-prescribed-names");
              const btn = item?.querySelector<HTMLButtonElement>(".accordion-button");
              if (btn && btn.getAttribute("aria-expanded") === "false") btn.click();
              item?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            prescribed names
          </a>
          ). For example, 'fermented processed meat - cooked' or 'infant
          formula'.
        </p>
        <p>
          The name of the food must not include words, statements, claims,
          pictures or graphics that represent a food in a way that is untrue,
          misleading or dishonest. For example, you cannot show a picture of
          honey on a yoghurt that does not contain honey.
        </p>
        <p>
          If the name of the food does not reflect its true nature, then you
          must include a description of the true nature on the label. For
          example, Luke's Hot's Sauce (red chilli pepper sauce).
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="https://www.legislation.gov.au/F2015L00383/latest/text"
              target="_blank"
              rel="noopener"
            >
              Standard 1.1.1
            </a>{" "}
            Structure of the Code and general provisions
            <ul>
              <li>
                See section 1.1.1-13 for food sold with a specified name or
                representation
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://www.legislation.gov.au/F2015L00383/latest/text"
              target="_blank"
              rel="noopener"
            >
              Schedule 10
            </a>{" "}
             - Generic names of ingredients and conditions for their use
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "characterising-ingredients",
    title: "Characterising ingredients",
    content: (
      <>
        <p>A characterising ingredient or component of a food is:</p>
        <ul>
          <li>mentioned in the name of the food; or</li>
          <li>usually associated with name of the food by a consumer; or</li>
          <li>emphasised on the label of the food in words or pictures.</li>
        </ul>
        <p>
          If an ingredient is usually associated with the food (for example,
          fruit in Christmas pudding), or is highlighted on the label in words,
          pictures, or graphics, then it is a characterising ingredient. For
          example:
        </p>
        <ul>
          <li>
            Strawberries are a characterising ingredient in strawberry yogurt
          </li>
          <li>Meat is a characterising ingredient in a meat pie</li>
          <li>
            Honey is a characterising ingredient where a yoghurt label shows a
            picture of a pot of honey
          </li>
        </ul>
        <p>
          The amount of the characterising ingredients in the food must be
          written on the label as a percentage or, if declared in the nutrition
          information panel, as the average quantity per serving and per unit
          quantity.
        </p>
        <section>
          <h4>Further reading</h4>
          <i>Australia New Zealand Food Standards Code</i>
          <ul>
            <li>
              <a
                href="https://www.legislation.gov.au/F2015L00398/latest/text"
                target="_blank"
                rel="noopener"
              >
                Standard 1.2.10
              </a>
              Information requirements - characterising ingredients and
              components of food.
            </li>
            <li>
              <a
                href="https://www.foodstandards.gov.au/consumer/labelling/ingredients"
                target="_blank"
                rel="noopener"
              >
                Ingredient lists and percentage labelling
              </a>
            </li>
          </ul>
        </section>
      </>
    ),
  },
  {
    id: "prescribed-names",
    title: "Prescribed names",
    content: (
      <>
        <p>
          The following are considered prescribed names under the Food Standards
          Code and must be used when naming these foods.
        </p>
        <ul>
          <li>fermented manufactured meat - cooked</li>
          <li>fermented manufactured meat - heat treated</li>
          <li>fermented manufactured meat - not heat treated</li>
          <li>fermented processed meat - cooked</li>
          <li>fermented processed meat - heat treated</li>
          <li>fermented processed meat - not heat treated</li>
          <li>honey</li>
        </ul>

        <section>
          <h4>Further reading</h4>
          <i>Australia New Zealand Food Standards Code</i>
          <ul>
            <li>
              <a
                href="https://www.legislation.gov.au/F2015L00427/latest/text"
                target="_blank"
                rel="noopener"
              >
                Standard 2.2.1
              </a>
              Meat and meat products
            </li>
            <li>
              <a
                href="https://www.legislation.gov.au/F2015L00407/latest/text"
                target="_blank"
                rel="noopener"
              >
                Standard 2.8.2
              </a>
              Honey
            </li>
          </ul>
        </section>
      </>
    ),
  },
];

const extraRequirements: AccordionItemConfig[] = [
  {
    id: "breads-cereals-grains",
    title: "Breads, cereals and grains",
    content: (
      <>
        <p>
          There are rules for the use of wholegrain and wholemeal in the food
          name.
        </p>
        <p>
          The names 'shortbread', 'crispbread' and 'unleavened bread' can be
          used for foods which are not 'bread', because a consumer understands
          that they are not 'bread' as defined in the Food Standards Code.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00383"
              target="_blank"
              rel="noopener"
            >
              Standard 1.1.1
            </a>{" "}
            —13 Food sold with a specified name or representation
          </li>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00420"
              target="_blank"
              rel="noopener"
            >
              Standard 2.1.1
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "chocolate",
    title: "Chocolate and cocoa",
    content: (
      <>
        <p>When naming a food chocolate, it must be:</p>
        <ul>
          <li>made from cocoa bean products; and</li>
          <li>
            have no more than 50 g/kg of edible oils (other than cocoa butter or
            dairy fats); and
          </li>
          <li>
            be prepared from a minimum of 200 g/kg of cocoa bean products.
          </li>
        </ul>
        <p>
          When naming a food cocoa, it must be made from cocoa beans, from which
          a portion of the fat can have been removed. Cocoa can contain added
          salt or spices.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00487"
              target="_blank"
              rel="noopener"
            >
              Standard 2.10.4
            </a>{" "}
            Miscellaneous standards for other foods
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "Alcoholic drinks",
    title: "Alcoholic drinks",
    content: (
      <>
        <p>
          Alcohol includes beer, wine and spirits and has unique and additional
           requirements such as number of standard drinks. 
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="https://www.legislation.gov.au/F2015L00469/latest/text"
              target="_blank"
              rel="noopener"
            >
              Standard 2.7.1
            </a>{" "}
            Labelling of alcoholic beverages and food containing alcohol
          </li>
          <li>
            <a
              href="https://www.legislation.gov.au/F2015L00384/latest/text"
              target="_blank"
              rel="noopener"
            >
              Standard 2.7.2
            </a>{" "}
            Beer
          </li>
          <li>
            <a
              href="https://www.legislation.gov.au/F2015L00388/latest/text"
              target="_blank"
              rel="noopener"
            >
              Standard 2.7.3
            </a>{" "}
            Fruit wine, vegetable wine and mead
          </li>
          <li>
            <a
              href="https://www.legislation.gov.au/F2015L00391/latest/text"
              target="_blank"
              rel="noopener"
            >
              Standard 2.7.4
            </a>{" "}
            Wine and wine product
          </li>
          <li>
            <a
              href="https://www.legislation.gov.au/F2015L00399/latest/text"
              target="_blank"
              rel="noopener"
            >
              Standard 2.7.5
            </a>{" "}
            Spirits
          </li>
          <li>
            <a
              href="https://www.foodstandards.gov.au/consumer/labelling/Labelling-of-alcoholic-beverages"
              target="_blank"
              rel="noopener"
            >
              Labelling of alcoholic beverages
            </a>
          </li>
        </ul>
        <i>Queensland Health</i>
        <ul>
          <li>
            <a
              href="https://www.qld.gov.au/health/staying-healthy/food-pantry/food-labelling/food-product-guides/alcoholic-drinks"
              target="_blank"
              rel="noopener"
            >
              Alcoholic drinks
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "food-containing-alcohol",
    title: "Food containing alcohol",
    content: (
      <>
        <p>
          A food containing alcohol must not be represented in a way that
          suggests the food is non-alcoholic. For example:
        </p>
        <ul>
          <li>Rum balls</li>
          <li>Brandy custard</li>
          <li>Vanilla bean paste</li>
        </ul>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00469"
              target="_blank"
              rel="noopener"
            >
              Standard 2.7.1
            </a>{" "}
            Labelling of alcoholic beverages and food containing alcohol
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "fruit-and-vegetables",
    title: "Fruit and vegetables",
    content: (
      <>
        <p>
          <b>If the food is drink made from fruit or vegetables:</b> There are
          naming rules for juice, juice blends and juice drinks. Please read the
          Food Standards Code to determine which one applies to your food.
        </p>
        <p>
          <b>If the food is a jam:</b> If you name a food jam, it must be made
          from no less than 400 g/kg of fruit. A jam can include conserve but it
          does not include marmalade.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00459"
              target="_blank"
              rel="noopener"
            >
              Standard 2.3.2
            </a>{" "}
            Jam
          </li>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00426"
              target="_blank"
              rel="noopener"
            >
              Standard 2.6.1
            </a>{" "}
            Fruit juice and vegetable juice
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "hemp",
    title: "Hemp food products",
    content: (
      <>
        <p>
          <b>If the food is, or contains, allowed low THC hemp:</b> The label
          must not include the words ‘cannabis’, ‘marijuana’ or similar. The
          label cannot have pictures of any part of a cannabis plant other than
          the seed.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00416"
              target="_blank"
              rel="noopener"
            >
              Standard 1.4.4
            </a>{" "}
            Prohibited and restricted plants and fungi
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "honey-products",
    title: "Honey and honey products",
    content: (
      <>
        <p>Honey means the natural sweet substance produced by honey bees.</p>
        <p>Food that is labelled as ‘honey’ must:</p>
        <ul>
          <li>be honey; and</li>
          <li>
            contain no less than 60% reducing sugars; and no more than 21%
            moisture.
          </li>
        </ul>
        <p>
          The food name and description must contain the prescribed name of
          ‘honey’.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00389"
              target="_blank"
              rel="noopener"
            >
              Standard 1.2.2
            </a>{" "}
            Information requirements – food identification
          </li>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00407"
              target="_blank"
              rel="noopener"
            >
              Standard 2.8.2
            </a>{" "}
            Honey
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "jams",
    title: "Jams",
    content: (
      <>
        <p>
          If you name a food jam, it must be made from no less than 400 g/kg of
          fruit.
        </p>
        <p>A jam can include conserve, but does not include marmalade.</p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00459"
              target="_blank"
              rel="noopener"
            >
              Standard 2.3.2
            </a>{" "}
            Jam
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "kava",
    title: "Kava and kava root",
    content: (
      <>
        <p>
          Kava and kava root are allowed to be sold in Australia only if the
          food is:
        </p>
        <ul>
          <li>A drink made from kava root using cold water; or</li>
          <li>Dried or raw kava root.</li>
        </ul>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00466"
              target="_blank"
              rel="noopener"
            >
              Standard 2.6.3
            </a>{" "}
            Kava
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "meat-products",
    title: "Meat and meat products",
    content: (
      <>
        <p>
          There are naming rules for meat, including jerky, meat pies and
          sausages.
        </p>
        <p>
          There are{" "}
          <a data-accordion-item="prescribed-names" className="accordion-btn">
            prescribed names
          </a>{" "}
          for fermented manufactured meat.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00427"
              target="_blank"
              rel="noopener"
            >
              Standard 2.2.1
            </a>{" "}
            Meat and meat products
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "milk-dairy",
    title: "Milk, dairy and dairy alternatives",
    content: (
      <>
        <p>
          If your food is milk, dairy or dairy alternative, you need to read the
          Food Standards Code to identify the necessary naming format. For
          example, the ingredient name ‘soy’ in soy milk or soy ice cream
          indicates that these foods are not dairy products.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00383"
              target="_blank"
              rel="noopener"
            >
              Standard 1.1.1
            </a>{" "}
            Structure of the code and general provisions
            <ul>
              <li>
                See section 1.1.1—13 for food sold with a specified name or
                representation
              </li>
            </ul>
          </li>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00462"
              target="_blank"
              rel="noopener"
            >
              Standard 2.5.1
            </a>{" "}
            Milk
          </li>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00470"
              target="_blank"
              rel="noopener"
            >
              Standard 2.5.2
            </a>{" "}
            Cream
          </li>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00413"
              target="_blank"
              rel="noopener"
            >
              Standard 2.5.3
            </a>{" "}
            Fermented milk products
          </li>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00414"
              target="_blank"
              rel="noopener"
            >
              Standard 2.5.4
            </a>{" "}
            Cheese
          </li>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00423"
              target="_blank"
              rel="noopener"
            >
              Standard 2.5.5
            </a>{" "}
            Butter
          </li>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00424"
              target="_blank"
              rel="noopener"
            >
              Standard 2.5.6
            </a>{" "}
            Ice cream
          </li>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00425"
              target="_blank"
              rel="noopener"
            >
              Standard 2.5.7
            </a>{" "}
            Dried milk, evaporated milk and condensed milk
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "non-alcoholic-drinks",
    title: "Non-alcoholic drinks",
    content: (
      <>
        <p>
          <b>If the food is drink made from fruit or vegetables:</b>
          <br />
          There are naming rules for juice, juice blends and juice drinks.
          Please read the Food Standards Code to determine which one applies to
          your food.
        </p>
        <p>
          <b>If the food is non-alcoholic or brewed soft drink:</b>
          <br />
          Non-alcoholic drinks and brewed soft drinks (e.g.: fermented ginger
          beer or kombucha) must not suggest the product is an alcoholic
          beverage. There is a possible risk that brewed soft drinks may contain
          alcohol which need extra labelling requirements. We recommend you seek
          professional advice to prepare your food label.
        </p>
        <p>
          <b>If the food is tea or coffee:</b>
          <br />
          There are naming rules for coffee and tea. Please read the Food
          Standards Code to ensure your label is correct.
        </p>
        <p>
          Coffee and tea include types that are: caffeinated, decaffeinated,
          instant or soluble.
        </p>
        <p>
          <b>If your food is spring water or mineral water:</b>
          <br />
          Spring and mineral water means ground water.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00426"
              target="_blank"
              rel="noopener"
            >
              Standard 2.6.1
            </a>{" "}
            Fruit juice and vegetable juice
          </li>
          <li>
            <a
              href="https://www.legislation.gov.au/Series/F2015L00465"
              target="_blank"
              rel="noopener"
            >
              Standard 2.6.2
            </a>{" "}
            Non-alcoholic beverages and brewed soft drinks
          </li>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00487"
              target="_blank"
              rel="noopener"
            >
              Standard 2.10.4
            </a>{" "}
            Miscellaneous standards for other foods
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "nuts-seeds",
    title: "Nuts and seeds",
    content: (
      <>
        <p>
          Food that is sold as peanut butter must be a peanut based spread that
          has no less than 850 g/kg of peanuts.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00487"
              target="_blank"
              rel="noopener"
            >
              Standard 2.10.4
            </a>{" "}
            Miscellaneous standards for other foods
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "oils-margarine",
    title: "Oils and margarine",
    content: (
      <>
        <p>
          Margarine means an edible oil spread containing no less than 800 g/kg
          of edible oils.
        </p>
        <p>
          You can only name your food an oil spread or table margarine, if the
          food contain no less than 55 μg/kg of vitamin D.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00461"
              target="_blank"
              rel="noopener"
            >
              Standard 2.4.2
            </a>{" "}
            Edible oil spreads
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "salt-products",
    title: "Salt and salt products",
    content: (
      <>
        <p>
          Foods that are labelled salt or a salt product have special
          requirements. These products cannot make nutrition or health claim,
          must have extra information in the nutrition information panel and
          must be made from certain elements.
        </p>
        <p>
          You need to read the Food Standards Code to ensure your label is
          correct.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00485"
              target="_blank"
              rel="noopener"
            >
              Standard 2.10.2
            </a>{" "}
            Salt and salt products
          </li>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00487"
              target="_blank"
              rel="noopener"
            >
              Standard 2.10.4
            </a>{" "}
            Miscellaneous standards for other foods
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sugar",
    title: "Sugar and sugar alternatives",
    content: (
      <>
        <p>
          Food that is sold as white sugar or a sugar must be purified
          crystallised sucrose and have no less than 99.7% sucrose when dry.
        </p>
        <p>
          Food that is sold as icing must be a mixture of sugar and other foods
          for use as a coating and includes frosting, plastic icing and icing
          gel.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00405"
              target="_blank"
              rel="noopener"
            >
              Standard 2.8.1
            </a>{" "}
            Sugar and sugar products
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "vinegar",
    title: "Vinegar",
    content: (
      <>
        <p>
          A food that is sold as imitation vinegar or vinegar must contain no
          less than 40 g/kg of acetic acid.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00484"
              target="_blank"
              rel="noopener"
            >
              Standard 2.10.1
            </a>{" "}
            Vinegar and related products
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "claims",
    title: "Claims: Nutrition, health and related claims",
    content: (
      <>
        <p>
          Nutrition, health and related claims are voluntary statements made 
          by food businesses on labels and in advertising about the content of
           certain nutrients or substances in a food, or the relationship between 
           food and health. 
        </p>
        <b>
          Claims cannot be made about:
        </b>
        <ul>
          <li>kava</li>
          <li>infant formula products</li>
          <li>any food that contains more than 1.15% alcohol by volume, other 
            than a nutrition content claim about 
            <ul>
              <li>energy, carbohydrate or gluten content; or </li>
              <li>salt or sodium content about a food that is not a beverage</li>
            </ul>
          </li>
          <li>cannabidiol in hemp food products.</li>
        </ul>
        <b>Health claims</b>
        <p>
          Health claims refer to a relationship between a food and health. 
          For example:
        </p>
        <ul>
          <li>Calcium for bones and teeth </li>
          <li>Diets high in calcium may reduce the risk of osteoporosis in 
            people 65 years and over </li>
        </ul>
        <p>
          Health claims are not permitted on foods that are high in 
          saturated fat, sugar or salt. There are lists of pre-approved 
          food-health relationships that businesses can base their 
          claims on. These are listed in {" "}
          <a
              href="https://www.legislation.gov.au/F2015L00474/latest/text"
              target="_blank"
              rel="noopener"
            >
              Schedule 4
            </a>{" "}
            
             of the Code. 
        </p>
        <b>Nutrition content claims</b>
        <p>
          Nutrition content claims indicate the presence or absence of 
          certain nutrients or substances in the food, for example, 
          ‘low in fat’ or ‘good source of calcium’. These claims will need 
          to meet certain criteria set out in the Standard. For example, food 
          with a ‘good source of calcium’ claim will need to contain not less 
          than the amount of calcium specified in the Standard. 
        </p>
        <b>
          Endorsments
        </b>
        <p>
          An endorsement is a nutrition content claim or health claim that is 
          made with the permission of an endorsing body, for example the Heart 
          Foundation Tick. 
        </p>
        <b>Consumer value claims</b>
        <p>
          Other consumer value claims such as cage free; organic or locally 
          grown are covered by Australian Competition and Consumer Commission. 
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="https://www.legislation.gov.au/F2015L00394/latest/text"
              target="_blank"
              rel="noopener"
            >
              Standard 1.2.7
            </a>{" "}
            Nutrition, health and related claims
            <ul>
              <li>
                See section 1.2.7-23 Endorsing bodies
              </li>
              <li>
                See section 1.2.7-24 Criteria for endorsements
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://www.legislation.gov.au/F2015L00474/latest/text"
              target="_blank"
              rel="noopener"
            >
              Schedule 4
            </a>{" "}
            Nutrition, health and related claims
          </li>
          <li>
            <a
              href="https://www.foodregulation.gov.au/sites/default/files/2023-09/getting-your-claims-right.pdf"
              target="_blank"
              rel="noopener"
            >
              Getting Your Claims Right - 7. Endorsing bodies and endorsements
            </a>{" "}
          </li>
          <li>
            <a
              href="https://www.foodregulation.gov.au/sites/default/files/2023-09/getting-your-claims-right.pdf"
              target="_blank"
              rel="noopener"
            >
              Australian Competition and Consumer Commission
            </a>{" "}
          </li>
          <li>
            <a
              href="https://catalogue.nla.gov.au/catalog/3889020"
              target="_blank"
              rel="noopener"
            >
              Food and beverage industry: food descriptors guideline to the Trade Practices 
              Act / Australian Competition & Consumer Commission 
            </a>{" "}
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "Drinks-made-from-cereals-nuts-seeds",
    title: "Drinks made from cereals, nuts and/or seeds",
    content: (
      <>
        <p>
          Drinks made from cereals, nuts and or seeds are not suitable for certain age 
          groups, depending on the amount of protein and fats in the product. There 
          are strict rules on how this information must be labelled. 
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a
              href="http://www.comlaw.gov.au/Series/F2015L00405"
              target="_blank"
              rel="noopener"
            >
              Standard 1.2.3
            </a>{" "}
            Information requirements – warning statements, advisory statements and declarations
          </li>
          <li>
            <a
              href="https://www.legislation.gov.au/F2015L00479/latest/text"
              target="_blank"
              rel="noopener"
            >
              Schedule 9
            </a>{" "}
            Mandatory advisory statements and declarations
          </li>
        </ul>
      </>
    ),
  },
];

export const FoodNamePage = ({ activeSectionId = null }: FoodNamePageProps) => {
  return (
    <div className="side-padding vertical-padding">
      <PrintButton />
      <h3>General requirements</h3>
      <Accordion items={generalRequirements} activeItemId={activeSectionId} />
      <h3>Food with complex requirements</h3>
      <Accordion items={extraRequirements} activeItemId={activeSectionId} />
    </div>
  );
};
