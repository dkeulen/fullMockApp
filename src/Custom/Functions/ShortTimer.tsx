import { formatDuration } from "date-fns";
import { shortFormatDurationLocale } from "../../Assets/Types";

const ShortTimer = (timer: Duration) => {
  return formatDuration(timer, {
    format: ["hours", "minutes", "seconds"],
    locale: shortFormatDurationLocale,
    delimiter: ":",
    zero: true
  });
};

export default ShortTimer;
