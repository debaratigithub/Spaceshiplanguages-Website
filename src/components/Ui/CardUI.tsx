import {
  Card,
  CardContent,
  Typography,
  Chip,
  CardActions,
  Stack,
  Theme,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import ButtonUse from "../ButtonUse";
import dtIcon from "../../../public/images/dt.png";
import insTructor from "../../../public/images/feat1.jpg";
import Link from "next/link";

type ItemsProps = {
  name?: string;
  description?: string;
  languages?: string[];
  image?: StaticImageData | string;
  price?: number;
  itemData: ItemData;
  blog?: boolean;
};
type ItemData = {
  name?: string;
  description?: string;
  languages?: string[];
  image?: StaticImageData | string;
  price?: number;
  date?: string;
  actionBar?: boolean;
  blog?: boolean;
  id?:string
};


const CardUI = (props: ItemsProps) => {
  //console.log(props.itemData,"home page teacher")
  const teacherId=props.itemData.id;
  console.log(teacherId,"home page teacher")
  const { name, date, description, image, actionBar, blog} = props.itemData;
  const languages = ["english", "spanish", "french"];
  return (
    <Card elevation={0} sx={productCard}>
      {image ? (
        <Image src={image} height={205} width={500} alt="alt text" />
      ) : (
        <Image src={insTructor} height={205} width={500} alt="alt text" />
      )}
      <CardContent>
        {date ? (
          <Stack direction="row" sx={dategap}>
            <Image src={dtIcon} width={21} height={21} alt="alt text" />
            <Typography sx={datetxt}>{date}</Typography>
          </Stack>
        ) : (
          <Stack direction="row" sx={dategap}>
            <Image src={dtIcon} width={21} height={21} alt="alt text" />
            <Typography sx={datetxt}>{date}</Typography>
          </Stack>
        )}
        {name && (
          <Typography variant="h4" sx={instName}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
        )}
        {description ? (
          <Typography variant="body2" sx={instDesc}>
            {description}
          </Typography>
        ) : (
          <Typography variant="body2" sx={instDesc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting...
          </Typography>
        )}
        {!blog && (
          <>
            {languages.map((language, index) => (
              <Chip sx={langBtn} key={index} label={language} />
            ))}
          </>
        )}
      </CardContent>
      {!blog && (
        <>
          {actionBar ? (
            <CardActions sx={cardAction}>
              <Stack>
                <Typography variant="h5" sx={lessonTxt}>
                  Lessons start from
                </Typography>
                <Typography variant="h4" sx={priceTxt}>
                  USD 9.00
                </Typography>
              </Stack>
              <ButtonUse name="Book Session" />
            </CardActions>
          ) : (
            <CardActions sx={cardAction}>
              <Stack>
                <Typography variant="h5" sx={lessonTxt}>
                  Lessons start from
                </Typography>
                <Typography variant="h4" sx={priceTxt}>
                  USD 9.00
                </Typography>
              </Stack>
              <Link href={`/find-an-instructor/${teacherId}`}> 
              <ButtonUse name="Book Session" />
              </Link>
              
            </CardActions>
          )}
        </>
      )}
    </Card>
  );
};
const langBtn = (theme: Theme) => ({
  background: "#8ADCC9",
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: "normal",
  textTransform: "uppercase",
  marginRight: "0.375rem",
  paddingLeft: "0.125rem",
  paddingRight: "0.125rem",
  height: "2.313rem",
  borderRadius: "2.5rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "0.875rem",
    height: "1.75rem",
  },
});
const productCard = () => ({
  border: "1px solid #EAEAEA",
  borderRadius: "0.625rem",
});
const instName = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.75rem",
  fontWeight: 700,
  lineHeight: "normal",
  marginBottom: "1rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
  },
});
const instDesc = (theme: Theme) => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontWeight: 400,
  lineHeight: "2.25rem",
  marginBottom: "1.5rem",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    lineHeight: "inherit",
  },
});
const cardAction = () => ({
  justifyContent: "space-between",
  marginTop: "1.125rem",
  "& button": {
    height: "65px",
    fontSize: "1.625rem",
    fontWeight: 700,
    lineHeight: "normal",
  },
});
const lessonTxt = () => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.025rem",
  fontWeight: 400,
  lineHeight: "normal",
});
const priceTxt = () => ({
  color: "#000",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontWeight: 700,
  lineHeight: "normal",
});
const datetxt = (theme: Theme) => ({
  marginLeft: "0.5rem",
  color: "#12BA94",
  fontFamily: "Karla",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1rem",
  },
});
const dategap = () => ({
  marginBottom: "1rem",
});
export default CardUI;
